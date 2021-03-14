import React from 'react';
import { Button } from '../../types/login.type';
import style from './Index.module.sass';

type Props = {
  buttons: Button[]
}

const Index: React.FC<Props> = ({ buttons }) => {

  return (
    <div className={ style.Index }>
      <h1 className={ style.Index__title }>
        Welcome to<br />
        SampleTodo
      </h1>

      <div className={ style.Index__main }>
        {
          buttons.map(({ text, icon, onClick }) => (
            <div className={ style.Index__button } onClick={ onClick } key={ text } >
              <img className={ style.Index__text } src={ icon } />
              { text }
              <span className="material-icons">chevron_right</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Index;
