import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'components/List/List'

const ExpenseList = () => {
    const expenseList =  useSelector(store => store.expense.expenses)
  return (
    <List items={expenseList}/>
  )
}

export default ExpenseList