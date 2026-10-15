import Styles from './Styles.module.css';
type DefaultInputProps = {
  id: string;
  labelText?: string; /* O ponto de interrogação indica que a propriedade é opcional */
 /* type: 'text' | 'number';  Se chama Union Type no TypeScript pois permite mais de um tipo */
} & React.ComponentProps<'input'>; /* Faz com que o componente aceite todas as propriedades de um input */;

export function DefaultInput ({type, id, labelText}: DefaultInputProps) {
  return (
    <>
    {labelText && <label htmlFor={id}>{labelText}</label> } {/*como nao tem um else, eu informo apenas condicao e valor */ }
    {/* {labelText ? <label htmlFor={id}>{labelText}</label> } : '' -> assim o if else caso tenha uma excecao else */}

      <input className={Styles.input} id={id} type={type} placeholder="Dê um nome para o seu projeto" />
    </>
  );
}