import React from 'react'

export default function BlogDetail({params}:{params:{blogdetail:string}}) {
  console.log("params",params.blogdetail)
  return (
    <div>Blog Details</div>
  )
}
