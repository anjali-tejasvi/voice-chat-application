import React, { useState } from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css'
import { BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const phoneEmailMap = {
    phone: Phone,
    email: Email
}


const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  function onNext(){
    
 }
  return (
    <>

    <div className={styles.cardWrapper}>
       <div>
       <div className={styles.buttonWrap}>
        <button className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`} onClick ={() => setType('phone')}>
          <BsPhone />
        </button>
        <button className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`} onClick= {() => setType('email')}>
          <MdOutlineEmail />
        </button>
        </div>
      <Component onNext = {onNext} />
       </div>
    </div>
    </>
  )
}

export default StepPhoneEmail;

