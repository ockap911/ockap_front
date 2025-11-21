export function TupaText({children}) {
  return <div> я загадал слово{children}</div>;
}





export function Button({ buttonText }) {
  return <button style={{ color: 'red' }}>{buttonText}</button>;
}



export function Gridfdfdf({children}) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 20 }}>{children}</div>;
}

