<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { DragEvents } from 'element-plus/es/components/tree/src/model/useDragNode'
import type {
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type'


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

const data = [
  {
    label: 'TextInput',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
    ],
  },
]

class DataBuilder {
    constructor(label) {
        this.label = label;
        this.age = age;
        this.otherField = otherField;
    }
}

const textFieldValue = ref('')



const handleButtonClick = () => {
  console.log('Text field value:', textFieldValue.value);
}
</script>

<template>
  <el-tree
    style="max-width: 600px"
    :data="data"
    draggable
    default-expand-all
    node-key="id"
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
    >
    <template #default="{ node }">
      <span class="prefix" :class="{ 'is-leaf': node.isLeaf }">
        [Butts!]
      </span>
      <span>{{ node.label }}</span>
    </template>
  </el-tree>
  <v-text-field v-model="textFieldValue" clearable label="" variant="underlined"></v-text-field>
  <v-btn @click="handleButtonClick">
    Button
  </v-btn>
</template>

