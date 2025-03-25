import React, { useState } from "react";
import { AccordianListWrapper } from "./styles";

const List = ({ list, setData }: any) => {
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

  const addNodeToList = (parentId: any) => {
    const name = prompt("enter name");

    const updateTree = (list: any) => {
      return list.map((node: any) => {
        if (node.id == parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: false,
                children: [],
              },
            ],
          };
        }
        if (node.children && node.children.length > 0) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };
    setData((prev: any) => updateTree(prev));
  };

  //   const deleteNodeToList = (parentId: any) => {
  //     const updateTree = (list: any) => {
  //       return list.filter((node: any) => {
  //         console.log("my", node.id, parentId);
  //         if (node.id == parentId) {
  //           return false;
  //         }

  //         if (node.children && node.children.length > 0) {
  //           node.children = updateTree(node.children);
  //         }
  //         return true;
  //       });
  //     };
  //     setData((prev: any) => updateTree(prev));
  //   };

  const deleteNodeToList = (parentId: any) => {
    const updateTree = (list: any) => {
      return list
        .filter((node: any) => node.id != parentId)
        .map((node: any) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev: any) => updateTree(prev));
  };
  return (
    <AccordianListWrapper direction="column">
      {list?.map((node: any) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() => {
                setIsExpanded((prev: any) => ({
                  ...prev,
                  [node.id]: !prev[node.id],
                }));
              }}
            >
              {isExpanded?.[node?.id] ? "-" : "+"}
            </span>
          )}
          <span>{node?.name} </span>
          {node.isFolder && (
            // <span onClick={() => updateNode(node)}>
            <span onClick={() => addNodeToList(node.id)}>
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/5994/5994754.png"
                alt=""
              />
            </span>
          )}
          <span onClick={() => deleteNodeToList(node.id)}>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt=""
            />
          </span>
          {isExpanded[node.id] &&
            node.isFolder &&
            node.children &&
            node.children.length > 0 && (
              <div style={{ paddingLeft: "2rem" }}>
                <List list={node.children} setData={setData} />
              </div>
            )}
        </div>
      ))}
    </AccordianListWrapper>
  );
};

export default List;

//55 min
//Task delete node
