const ola = () => {
    alert('A label desse botão é baixar o CV')
}


const Button = (children) => {
    return <button onClick={ola}>{children.label}</button>
}

export default Button