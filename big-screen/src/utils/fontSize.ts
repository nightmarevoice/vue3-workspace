const VITE_BASE_VIEW_PORT = import.meta.env.VITE_BASE_VIEW_PORT;
export default function  fontSize(res:number){
  let docEl = document.documentElement,
    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = (clientWidth / VITE_BASE_VIEW_PORT);
  console.log(fontSize,8888);
  return res*fontSize;

}
