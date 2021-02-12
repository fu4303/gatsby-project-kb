import { Node } from 'gatsby'

export interface MdxNode extends Node {
  frontmatter?: {
    title?: string
    aliases?: string[]
  }
}