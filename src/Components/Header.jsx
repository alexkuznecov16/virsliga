export default function Header() {
  const HeaderStyle = {
    width: '100%',
    height: '50px',
    position: 'fixed',
    backgroundColor: 'red',
    color: '#fff',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <header style={HeaderStyle}>header block</header>
  )
}
