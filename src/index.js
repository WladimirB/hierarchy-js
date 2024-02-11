import '@/assets/main.css'

import json from './services.json'

const root = document.getElementById('insert')

const transformed = []

json.services
  .sort((a, b) => (a.head || 0) - (b.head || 0))
  .forEach((item) => {
    transformed.push(item)
  })

function lisToTree(list) {
  let map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; 
    list[i].children = [];
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (!node.head) {
      roots.push(node)
    } else {
      list[map[node.head]].children.push(node)
    }
  }
  return roots;
}

const tree = lisToTree(transformed)
console.log('t', tree)

const ul = document.createElement('ul')
const tags = mapChildren(tree)
ul.append(...tags)
const elems = ul.querySelectorAll('span.toggler')
root.append(ul)

Array.from(elems).forEach((elem) => {
  elem.addEventListener('click', (ev) => {
    const target = ev?.target?.nextElementSibling
    if (target && target?.tagName === 'UL') {
      target.classList.toggle('closed')
    }
  })
})

function mapChildren(children) {
  return children
    .sort((a,b) => a.sorthead - b.sorthead)
    .map((child) => {
      const el = createElem(`
        <li>
          <span class=${child.children.length ? 'toggler' : ''} >
            ${child.name} (${child.price})
          </span>
        </li>
      `)
      if (child.children.length) {
        console.log('children', children)
        const list = document.createElement('ul')
        list.classList.add('animate-height')
        list.classList.add('closed')
        const elems = mapChildren(child.children)
        list.append(...elems)
        el.append(list)
      }
      return el
    })
}

function createElem(tmpl) {
  const dom = new DOMParser().parseFromString(tmpl, 'text/html')
  const elem = dom.body.firstElementChild
  return elem
}
