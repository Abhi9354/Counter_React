export const Button = ({value,className,fn})=>{
    const classname = `btn btn-${className}`;
    const clicked=()=>{
        fn(value);
console.log('clicked happen',value);
    }
    return <button onClick={clicked} className={classname}>{value}</button>;
}