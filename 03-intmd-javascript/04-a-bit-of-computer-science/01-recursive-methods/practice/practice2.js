const tree = {
  name: "Homer",
  children: [
    {
      name: "Charls",
      children: [
        { name: "Hunter", children: [] }
      ]
    },
    {
      name: "Camille",
      children: [
        { name: "Dimi", children: [] },
        { name: "Danae", children: [] }
      ]
    }
  ]
}

function printChildrenRecursively(t) {
  if (t.children == 0) {
    return;
  }
  t.children.forEach(child => {
    console.log(child.name);
    printChildrenRecursively(child);
  });
}

printChildrenRecursively(tree);