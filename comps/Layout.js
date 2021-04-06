import Sidebar from './Sidebar.js';

const layoutStyle = {
  margin: 20,
  padding: 20,
 // border: '2px solid #000000',
  //outline: '#000000 solid 10000000000px',
}

// imports Header pages in the layoutStyle above, index will import this
export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Sidebar>
        </Sidebar>
    { props.children }
    </div>

  );
}