<script lang="ts" setup>
import PlusIcon from './icons/IconPlus.vue'
import { Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { DragEvents } from 'element-plus/es/components/tree/src/model/useDragNode'
import type {
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const handleDragStart = (node: Node, ev: DragEvents) => {
  console.log('drag start', node)
}
const handleDragEnter = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode: Node, dropNode: Node, ev: DragEvents) => {
  console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType,
  ev: DragEvents
) => {
  console.log('tree drag end:', dropNode && dropNode.label, dropType)
}
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: NodeDropType,
  ev: DragEvents
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
  <el-tree style="max-width: 600px" :data="dataSource" draggable default-expand-all node-key="id"
    @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop">
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span class="custom-icon">
          <a @click="append(data)" > <plus-icon  /> </a>
          <el-button size="small" type="danger" :icon="Delete" circle @click="remove(node, data)" />
        </span>
      </span>
    </template>
  </el-tree>
  <v-text-field v-model="textFieldValue" clearable label="" variant="underlined"
    :placeholder="dynamicPlaceholder()"></v-text-field>
  <v-btn @click="appendRoot()">
    Butt!
  </v-btn>
  <plus-icon />
</template>

<style scoped>
.el-tree {
  margin-top: 2rem;
  background: var(--color-background-dark);
  color: var(--color-text);
  --el-tree-node-hover-bg-color: var(--color-background-mute);
}

.custom-tree-node {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 2px;
}

.custom-icon {
margin-top: 2px;
display: flex;
justify-content: center;
}
</style>
