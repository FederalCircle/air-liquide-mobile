import React from 'react'
import { Container, Header, Title, Content, Right, Body } from 'native-base'
import ToDoList from '../components/ToDoList'
import useToDo from '../hooks/useToDo'

const Home = () => {
  const { toDoItems, toggleItem } = useToDo()

  const handleListItemPress = (index: number) => {
    toggleItem(index)
  }

  return (
    <Container>
      <Header>
        <Body>
          <Title>EPIs List</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <ToDoList items={toDoItems} onListItemPress={handleListItemPress} />
      </Content>
    </Container>
  )
}

export default Home
