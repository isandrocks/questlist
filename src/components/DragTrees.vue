<script lang="ts" setup>
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

const createNewChild = (labeldata: string) => {
  return { id: Date.now(), editable: true, completed: false, label: labeldata, children: [] }
}

// Drag and Drop

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
    'What Is the Airspeed Velocity of an Unladen Swallow'
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

const loadJson = (event: Event) => {
      const input = event.target as HTMLInputElement
      const file = input.files ? input.files[0] : null
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === 'string') {
          try {
            const jsonData = JSON.parse(result)
            dataSource.value = jsonData
            dataSource.value = [...dataSource.value]
          } catch (error) {
            console.error("Invalid JSON file", error)
            alert("Error loading file: Invalid JSON")
          }
        } else {
          console.error("FileReader result is not a string")
          alert("Error loading file: FileReader result is not a string")
        }
      }
      reader.readAsText(file)
    }

</script>

<template>
  <div class="grid h-full w-full">
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
      class="h-full w-full overflow-y-auto rounded border-2 border-solid border-[--color-background-soft] bg-[--color-background-dark]"
    >
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
                class="w-full border-none bg-transparent text-base outline-none"
              />
            </template>
            <template v-else>
              <span
                @dblclick="toggleEdit(node)"
                class="grid-cols-[repeat(2, minmax(0, 1.5rem)] grid text-base text-[--color-text]"
              >
                <template v-if="node.data.completed">
                  <CheckIcon class="check-icon" @click="toggleCompleted(node)" />
                </template>
                <template v-else>
                  <CircleIcon class="check-icon" @click="toggleCompleted(node)" />
                </template>
                {{ node.label }}
                <span
                  class="relative col-span-2 after:absolute after:start-4 after:h-[2px] after:-translate-y-2.5 after:transform after:bg-[--color-text] after:transition-all after:duration-500 after:ease-in-out"
                  :class="node.data.completed ? 'after:w-full' : 'after:w-0'"
                >
                </span>
              </span>
            </template>
          </span>
          <span class="inline-flex self-stretch">
            <EditIcon class="tree-icon" @click="toggleEdit(node)" />
            <PlusIcon class="tree-icon" @click="append(data)" />
            <TrashIcon class="tree-icon" @click="remove(node, data)" />
          </span>
        </span>
      </template>
    </el-tree>
    <div
      class="mt-[1rem] inline-flex h-[3rem] w-full items-center rounded border-2 border-solid border-[--color-background-soft] bg-[--color-background-dark] hover:border-[--color-background-mute]"
    >
      <PlusIcon
        class="m-[1ex] h-[4ex] w-[4ex] cursor-pointer p-[0.5ex] transition-all duration-300 hover:rounded-xl hover:bg-[--color-background-mute]"
        @click="appendRoot()"
      />
      <input
        class="relative w-[90%] border-none bg-inherit font-[1.2rem] placeholder-[--color-background-mute] focus:border-none focus:bg-[--color-background-dark] focus:text-[--color-text] focus:outline-none"
        v-model="textFieldValue"
        :placeholder="dynamicPlaceholder()"
        @keyup.enter="appendRoot()"
      />
    </div>
    <a @click="downloadJson" >download</a>
    <input type="file" @change="loadJson" accept=".json" />
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

@media (hover: hover) {
  .tree-icon:hover {
    background-color: var(--isr-c-bg-red);
    border-radius: 1em;
  }
}
</style>
