import react from 'react'
import css from './backdrop.module.css';

const backdrop = () => {
  <div className={css.Backdrop}>
    {props.children}
  </div>
}