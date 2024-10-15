<script lang="ts" setup>
import PlusIcon from './icons/IconPlus.vue'
import TrashIcon from './icons/IconTrash.vue'
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type {
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type'

interface Tree {
  id: number
  label: string
  children?: Tree[]
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
}
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType
) => {
  console.log('tree drop:', dropNode.label, dropType)
}

const dataSource = ref<Tree[]>([])

const textFieldValue = ref('')

const resetTextField = () => {
  textFieldValue.value = ''
}

const append = (data: Tree) => {
  const newChild = { id: Date.now(), label: textFieldValue.value, children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
  resetTextField()
}

const appendRoot = () => {
  const newChild = { id: Date.now(), label: textFieldValue.value, children: [] }
  dataSource.value.push(newChild)
  console.log(dataSource.value)
  resetTextField()
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const getRandomIndex = (array: string[]) => {
  return Math.floor(Math.random() * array.length)
}

const dynamicPlaceholder = () => {
  const quotes = ["What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What is your Quest", "What Is the Airspeed Velocity of an Unladen Swallow"]
  return quotes[getRandomIndex(quotes)]
}

</script>

<template>
  <el-tree :data="dataSource" draggable default-expand-all show-checkbox node-key="id"
    @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop">
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span class="tree-icon-box">
          <a @click="append(data)" ><PlusIcon class="tree-icon"/></a>
          <a @click="remove(node, data)" ><TrashIcon class="tree-icon" /></a>
        </span>
      </span>
    </template>
  </el-tree>
    <v-text-field 
    class="textField" 
    v-model="textFieldValue" 
    label="" 
    variant="solo-filled"           
    :placeholder="dynamicPlaceholder()"
    :prepend-inner-icon="PlusIcon"
    @click:prepend-inner="appendRoot()"
    >
    </v-text-field>
    </template>

<style scoped>
.el-tree {
  max-width: 100%;
  height: 80%;
  margin-top: 2rem;
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

.tree-icon-box {
display: inline-flex;
align-self: stretch;
}

.tree-icon {
  height: 1em;
  width: 1em;
}

.textField {
  width: 100%;
  margin-top: 1rem;
}

.textFieldIcon {
  padding-left: .175ex;
  padding-top: .2ex;
  transition: 0.4s
}

.textField-icon-plus {
  background-color: #5a5a5a44;
  border-radius: .5ex;
}

@media (hover: hover) {
  .textField-icon-plus:hover {
    background-color: #141414d3;
    border-radius: .5ex;
  }
  .tree-icon-box a:hover {
    border-radius: 1em;
  }
}
</style>
