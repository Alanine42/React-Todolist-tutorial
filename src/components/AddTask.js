import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()    // prevents page from refreshing

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })  // adding a task object

    setText('')
    setDay('')
    setReminder(false)
  }

  const catchToday = (dayStr) => {

    setDay(dayStr)

    if (day === 'Today' || day === 'today') {
      let newStr = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
      setDay(newStr)
    }
    else if (day == 'tmr' || day == 'tomorrow') {
      let newStr = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
      setDay(newStr)
    }


  }



  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day</label>
        <input
          type='text'
          placeholder='Add Day'
          value={day}
          onChange={(e) => catchToday(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />

    </form>
  )
}


export default AddTask