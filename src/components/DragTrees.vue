<script lang="ts" setup>
import UploadIcon from './icons/IconUpload.vue'
import SaveIcon from './icons/IconSave.vue'
import CheckIcon from './icons/IconCheck.vue'
import CircleIcon from './icons/IconCircle.vue'
import EditIcon from './icons/IconEdit.vue'
import PlusIcon from './icons/IconPlus.vue'
import TrashIcon from './icons/IconTrash.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { NodeDropType } from 'element-plus/es/components/tree/src/tree.type'

// Data and starting variables

interface Tree {
  id: number
  editable: boolean
  completed: boolean
  label: string
  children?: Tree[]
}

const dataSource = ref<Tree[]>([])

const savedDataSource = localStorage.getItem('savedDataSource')
if (savedDataSource) {
  dataSource.value = JSON.parse(savedDataSource)
}

const saveDataSource = () => {
  localStorage.setItem('savedDataSource', JSON.stringify(dataSource.value))
}

const textFieldValue = ref('')

const resetTextField = () => {
  textFieldValue.value = ''
}

const sanitizeText = (text: string): string => {
  if (typeof text !== 'string') return ''

  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>'"&]/g, '') // Remove potentially dangerous characters
    .substring(0, 200) // Limit length
    .trim()
}

const createNewChild = (labeldata: string) => {
  const sanitizedLabel = sanitizeText(labeldata)
  return {
    id: Date.now(),
    editable: true,
    completed: false,
    label: sanitizedLabel,
    children: []
  }
}

// Drag and Drop handlers

const handleDragStart = (node: Node) => {
  console.log('drag start', node)
}
const handleDragEnter = (draggingNode: Node, dropNode: Node) => {
  console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (draggingNode: Node, dropNode: Node) => {
  console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode: Node, dropNode: Node) => {
  console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (draggingNode: Node, dropNode: Node, dropType: NodeDropType) => {
  console.log('tree drag end:', dropNode && dropNode.label, dropType)
  saveDataSource()
}
const handleDrop = (draggingNode: Node, dropNode: Node, dropType: NodeDropType) => {
  console.log('tree drop:', dropNode.label, dropType)
}

const allowDrag = (draggingNode: Node) => {
  return !draggingNode.data.editable === true
}

// Tree functions

const append = (data: Tree) => {
  const newChild = createNewChild('')
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  checkEditable()
  dataSource.value = [...dataSource.value]
  saveDataSource()
}

const appendRoot = () => {
  const newChild = createNewChild(textFieldValue.value)
  if (textFieldValue.value != '') {
    newChild.editable = false
  }
  checkEditable()
  dataSource.value.push(newChild)
  saveDataSource()
  resetTextField()
}

const remove = (node: Node, data: Tree) => {
  if (!node.isLeaf) {
    ElMessageBox.confirm('This quest has sub quests. Are you sure you want to delete it?', {
      customClass: 'tree-message-box',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    })
      .then(() => {
        const parent = node.parent
        const children: Tree[] = parent.data.children || parent.data
        const index = children.findIndex((d) => d.id === data.id)
        children.splice(index, 1)
        dataSource.value = [...dataSource.value]
        saveDataSource()
        ElMessage({
          type: 'success',
          message: 'Delete completed'
        })
        return
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  } else {
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataSource.value = [...dataSource.value]
    saveDataSource()
  }
}

const toggleEdit = (node: Node) => {
  if (node.data.editable) {
    // Sanitize the label before saving
    node.data.label = sanitizeText(node.data.label)
    node.data.editable = false
    checkEditable()
    dataSource.value = [...dataSource.value]
    saveDataSource()
  } else {
    node.data.editable = true
    checkEditable()
    dataSource.value = [...dataSource.value]
  }
}

const toggleCompleted = (node: Node) => {
  node.data.completed = !node.data.completed
  dataSource.value = [...dataSource.value]
  saveDataSource()
}

//Misc functions

const getRandomIndex = (array: string[]) => {
  return Math.floor(Math.random() * array.length)
}

const dynamicPlaceholder = () => {
  const quotes = [
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What is your Quest',
    'What Is the Airspeed Velocity of an Unladen Swallow',
    'What is the capital of Assyria',
    'What is your favorite color'
  ]
  return quotes[getRandomIndex(quotes)]
}

const vFocus = {
  mounted: (el) => el.focus()
}

const hasEditable = ref(false)

const checkEditable = () => {
  hasEditable.value = containsEditable(dataSource.value)
}

const containsEditable = (nodes) => {
  for (const node of nodes) {
    if (node.editable) {
      return true
    }
    if (node.children && node.children.length > 0) {
      if (containsEditable(node.children)) {
        return true
      }
    }
  }

  return false
}

const downloadJson = () => {
  const jsonData = JSON.stringify(dataSource.value, null, 2)
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'QuestList.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const validateTreeNode = (node) => {
  // Validate node structure and sanitize content
  if (!node || typeof node !== 'object') {
    return null
  }

  const sanitizedNode = {
    id: typeof node.id === 'number' ? node.id : Date.now(),
    editable: typeof node.editable === 'boolean' ? node.editable : false,
    completed: typeof node.completed === 'boolean' ? node.completed : false,
    label: '',
    children: []
  }

  // Sanitize label - remove HTML tags and limit length
  if (typeof node.label === 'string') {
    sanitizedNode.label = node.label
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>'"&]/g, '') // Remove potentially dangerous characters
      .substring(0, 200) // Limit length
      .trim()
  }

  // Recursively validate children
  if (Array.isArray(node.children)) {
    sanitizedNode.children = node.children
      .map(validateTreeNode)
      .filter((child) => child !== null)
      .slice(0, 50) // Limit number of children to prevent DoS
  }

  return sanitizedNode
}

const validateTreeData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Data must be an array')
  }

  if (data.length > 100) {
    throw new Error('Too many root nodes (max 100)')
  }

  return data.map(validateTreeNode).filter((node) => node !== null)
}

const loadJson = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null

  if (!file) return

  // Check file size (max 1MB)
  if (file.size > 1024 * 1024) {
    ElMessage({
      type: 'error',
      message: 'File too large (max 1MB)'
    })
    input.value = '' // Clear the input
    return
  }

  // Check file type
  if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
    ElMessage({
      type: 'error',
      message: 'Please select a valid JSON file'
    })
    input.value = '' // Clear the input
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    const result = e.target?.result
    if (typeof result === 'string') {
      try {
        // Parse JSON with size limit check
        if (result.length > 500000) {
          // 500KB text limit
          throw new Error('File content too large')
        }

        const jsonData = JSON.parse(result)

        // Validate and sanitize the data
        const validatedData = validateTreeData(jsonData)

        dataSource.value = validatedData
        dataSource.value = [...dataSource.value]
        saveDataSource()

        ElMessage({
          type: 'success',
          message: 'File loaded successfully'
        })
      } catch (error) {
        console.error('Invalid JSON file', error)
        ElMessage({
          type: 'error',
          message: `Error loading file: ${error.message || 'Invalid JSON'}`
        })
      }
    } else {
      console.error('FileReader result is not a string')
      ElMessage({
        type: 'error',
        message: 'Error loading file: Invalid file format'
      })
    }

    // Always clear the input after processing
    input.value = ''
  }

  reader.onerror = () => {
    ElMessage({
      type: 'error',
      message: 'Error reading file'
    })
    input.value = ''
  }

  reader.readAsText(file)
}
</script>

<template>
  <div class="flex h-[98%] w-full flex-col">
    <div
      class="sticky min-h-[93%] rounded border-2 border-solid border-(--color-background-soft)
        bg-(--color-background-dark)">
      <el-tree
        :data="dataSource"
        :draggable="!hasEditable"
        :default-expand-all="true"
        :expand-on-click-node="false"
        node-key="id"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        :allow-drag="allowDrag"
        class="h-full w-full overflow-y-auto bg-(--color-background-dark)">
        <template #default="{ node, data }">
          <span class="flex w-full justify-between self-stretch">
            <span>
              <template v-if="node.data.editable">
                <input
                  type="text"
                  v-model="node.data.label"
                  v-focus
                  @blur="toggleEdit(node)"
                  @keyup.enter="toggleEdit(node)"
                  class="w-full border-none bg-transparent text-base outline-hidden" />
              </template>
              <template v-else>
                <span
                  @dblclick="toggleEdit(node)"
                  class="grid-cols-[repeat(2, minmax(0, 1.5rem)] grid text-base text-(--color-text)">
                  <template v-if="node.data.completed">
                    <CheckIcon
                      class="check-icon"
                      @click="toggleCompleted(node)" />
                  </template>
                  <template v-else>
                    <CircleIcon
                      class="check-icon"
                      @click="toggleCompleted(node)" />
                  </template>
                  {{ node.label }}
                  <span
                    class="relative col-span-2 after:absolute after:start-4 after:h-[2px]
                      after:-translate-y-2.5 after:transform after:bg-(--color-text)
                      after:transition-all after:duration-500 after:ease-in-out"
                    :class="node.data.completed ? 'after:w-full' : 'after:w-0'">
                  </span>
                </span>
              </template>
            </span>
            <span class="inline-flex self-stretch">
              <EditIcon
                class="tree-icon"
                @click="toggleEdit(node)" />
              <PlusIcon
                class="tree-icon"
                @click="append(data)" />
              <TrashIcon
                class="tree-icon"
                @click="remove(node, data)" />
            </span>
          </span>
        </template>
      </el-tree>
    </div>
    <div
      class="mt-4 inline-flex h-12 w-full self-center rounded border-2 border-solid
        border-(--color-background-soft) bg-(--color-background-dark)
        hover:border-(--color-background-mute)">
      <PlusIcon
        class="m-[1ex] h-[4ex] w-[4ex] cursor-pointer p-[0.5ex] transition-all duration-300
          hover:rounded-xl hover:bg-(--color-background-mute)"
        @click="appendRoot()" />
      <input
        class="baseInput relative w-full border-none bg-inherit font-[1.2rem]
          placeholder-(--color-background-mute) focus:border-none focus:bg-(--color-background-dark)
          focus:text-(--color-text) focus:outline-hidden"
        v-model="textFieldValue"
        :placeholder="dynamicPlaceholder()"
        @keyup.enter="appendRoot()" />
      <a
        @click="downloadJson"
        class="cursor-pointer self-center p-[0.5ex] transition-all duration-300 hover:rounded
          hover:bg-(--color-background-mute)">
        <SaveIcon class="h-6 w-6 p-[0.3ex]" />
      </a>
      <label
        class="mr-1 cursor-pointer self-center p-[0.5ex] transition-all duration-300 hover:rounded
          hover:bg-(--color-background-mute)"
        for="upload">
        <UploadIcon class="h-6 w-6" />
      </label>
      <input
        type="file"
        @change="loadJson"
        accept=".json"
        id="upload"
        class="hidden" />
    </div>
  </div>
</template>

<style scoped>
.el-tree {
  background-color: var(--color-background-dark);
  --el-tree-node-content-height: auto;
  --el-tree-node-hover-bg-color: var(--color-background-mute);
}

.check-icon {
  height: 1em;
  width: 1em;
  align-self: center;
  stroke: var(--isr-c-red);
  margin-right: 4px;
  margin-top: 4px;
}

.tree-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: var(--isr-c-red);
  transition: 0.4s;
  padding: 3px;
  background-color: transparent;
}
.baseInput::placeholder {
  font-size: 0.625rem;
}

@media (hover: hover) {
  .tree-icon:hover {
    background-color: var(--isr-c-bg-red);
    border-radius: 1em;
  }
}
@media (min-width: 768px) {
  .baseInput::placeholder {
    font-size: 1rem;
  }
}
</style>
