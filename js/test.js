document.getElementById('btn').addEventListener('click', function(){
   const commentBox = document.getElementById('new-commet');
   const newComment = commentBox.value;
   const commentContainer = document.getElementById('container');
  const p = document.createElement('P');
 p.innerText= newComment;
  commentContainer.appendChild(p)
  commentBox.value = ``
})