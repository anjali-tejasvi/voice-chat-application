import React from 'react'
import Card from '../../../../components/shared/card/Card';
import Button from '../../../../components/shared/button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import { useState } from 'react';
import styles from '../StepPhoneEmail.module.css';
import  sendOtp  from '../../../../http/index';

const Phone = ({onNext}) => {

  const [phoneNumber, setPhoneNumber] = useState('');

 async function submit(){
    //server request
    const res = await sendOtp()
    console.log(res)

    onNext()
  }

  return (
    <Card title="☎️Enter your Phone Number " >
      <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
        <Button text="Next ➡️" onClick={submit}/>
        </div>
        <p className={styles.bottomParagraph}>
          By entring your number, you're agreeing to our 
          Terms of Service and Privacy Policy.
        </p>
      </div>
    </Card>
  )
}

export default Phone