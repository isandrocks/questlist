<script lang="ts" setup>
import CheckIcon from './icons/IconCheck.vue'
import CircleIcon from './icons/IconCircle.vue'
import EditIcon from './icons/IconEdit.vue'
import PlusIcon from './icons/IconPlus.vue'
import TrashIcon from './icons/IconTrash.vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type {
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const saveDataSource = () => {
  localStorage.setItem("savedDataSource", JSON.stringify(dataSource.value));
}

const handleDragStart = (node: Node) => {
  console.log('drag start', node)
}
const handleDragEnter = (
  draggingNode: Node,
  dropNode: Node
) => {
  console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (
  draggingNode: Node,
  dropNode: Node,
) => {
  console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode: Node, dropNode: Node) => {
  console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType
) => {
  console.log('tree drag end:', dropNode && dropNode.label, dropType)
  saveDataSource()
}
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType
) => {
  console.log('tree drop:', dropNode.label, dropType)
}

const dataSource = ref<Tree[]>([])

const savedDataSource = localStorage.getItem("savedDataSource");
if (savedDataSource) {
  dataSource.value = JSON.parse(savedDataSource);
}

const textFieldValue = ref('')

const resetTextField = () => {
  textFieldValue.value = ''
}

const createNewChild = (labeldata: string) => {
  return { id: Date.now(), editable: true, isStrikethrough: false, label: labeldata, children: [] };
}

const append = (data: Tree) => {
  const newChild = createNewChild('');
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
  saveDataSource()
}

const appendRoot = () => {
  const newChild = createNewChild(textFieldValue.value);
  if (textFieldValue.value != '') {
    newChild.editable = false;
  }
  dataSource.value.push(newChild)
  saveDataSource()
  resetTextField()
}

const remove = (node: Node, data: Tree) => {
  if (!node.isLeaf) {
    ElMessageBox.confirm("This quest has sub quests. Are you sure you want to delete it?", {
      customClass: 'tree-message-box',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then(() => {
      const parent = node.parent;
      const children: Tree[] = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      dataSource.value = [...dataSource.value];
      saveDataSource()
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
      return;
    })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
  } else {
    const parent = node.parent;
    const children: Tree[] = parent.data.children || parent.data;
    const index = children.findIndex((d) => d.id === data.id);
    children.splice(index, 1);
    dataSource.value = [...dataSource.value];
    saveDataSource()
  }
}

const getRandomIndex = (array: string[]) => {
  return Math.floor(Math.random() * array.length)
}

const dynamicPlaceholder = () => {
  const quotes = ["What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What Is the Airspeed Velocity of an Unladen Swallow"]
  return quotes[getRandomIndex(quotes)]
}

const toggleEdit = (node: Node) => {
  if (node.data.editable) {
    node.data.editable = false;
    dataSource.value = [...dataSource.value];

  } else {
    node.data.editable = true;
  }
}

const toggleStrikethrough = (node :Node) => {
  node.data.isStrikethrough = !node.data.isStrikethrough;
  dataSource.value = [...dataSource.value];
  saveDataSource()
}

const vFocus = {
  mounted: (el) => el.focus()
}

</script>

<template>
  <el-tree :data="dataSource" :draggable="true" :default-expand-all="true" :expand-on-click-node="false" node-key="id"
    @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop">
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <span>
          <template v-if="node.data.editable">
            <input type="text" v-model="node.data.label" v-focus @blur="toggleEdit(node)" />
          </template>
          <template v-else>
            <div @dblclick="toggleEdit(node)" :class="{ 'strikethrough': node.data.isStrikethrough, 'tree-textField': true }">
              <template v-if="node.data.isStrikethrough">
                <CheckIcon class="check-icon" @click="toggleStrikethrough(node)"/>
              </template>
              <template v-else>
                <CircleIcon class="check-icon" @click="toggleStrikethrough(node)"/>
              </template>
              {{ node.label }}
            </div>
          </template>
        </span>
        <span class="tree-icon-box">
          <a @click="toggleEdit(node)">
            <EditIcon class="tree-icon" />
          </a>
          <a @click="append(data)">
            <PlusIcon class="tree-icon" />
          </a>
          <a @click="remove(node, data)">
            <TrashIcon class="tree-icon" />
          </a>
        </span>
      </span>
    </template>
  </el-tree>
  <div class="textField-box">
    <PlusIcon class="textField-icon-plus" @click="appendRoot()" />
    <input class="textField" v-model="textFieldValue" :placeholder="dynamicPlaceholder()">
  </div>
</template>

<style scoped>


.el-tree {
  max-width: 100%;
  height: 80%;
  background: var(--color-background-dark);
  color: var(--color-text);
  --el-tree-node-hover-bg-color: var(--color-background-mute);
}


.custom-tree-node {
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
}

.tree-textField {
  display: inline-flex;
  align-items: center;
}

.tree-icon-box {
  display: inline-flex;
  align-self: stretch;
}

.tree-icon {
  height: 1em;
  width: 1em;
}

.check-icon {
  height: 1em;
  width: 1em;
  align-self: flex-end;
  margin-bottom: 2px;
  margin-right: 2px;
  stroke: var(--isr-c-red);
}

.textField {
  background-color: inherit;
  border: none;
  position: relative;
  width: 90%;
}

.textField::placeholder {
  color: var(--color-background-mute);
}

.textField:focus {
  outline: none;
  border: none;
  background-color: var(--color-background-dark);
  color: var(--color-text);
}

.textField-box {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  border: 2px solid var(--color-background-soft);
  border-radius: 1ex;
  background-color: var(--color-background-dark);
}

.textField-box:focus-within {
  border-color: var(--color-background-mute);
}

.textField-icon-plus {
  height: 4ex;
  width: 4ex;
  cursor: pointer;
  transition: 0.4s;
  padding: 0.5ex;
  margin: 1ex;
}

.strikethrough {
  text-decoration: line-through;
}

@media (hover: hover) {
  .textField-box:hover {
    border-color: var(--color-background-mute);
  }

  .textField-icon-plus:hover {
    background-color: var(--color-background-mute);
    border-radius: 5ex;
  }

  .tree-icon-box a:hover {
    border-radius: 1em;
  }
}
</style>