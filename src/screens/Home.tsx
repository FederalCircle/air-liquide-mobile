import React, { useState } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Body,
  Button,
  Text,
} from 'native-base'
import ToDoList from '../components/ToDoList'
import useToDo from '../hooks/useToDo'

const Home = () => {
  const { toDoItems, isToDoCompleted, toggleItem } = useToDo()
  const [isSuccess, setIsSuccess] = useState(false)

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
      <Content padder>
        {!isSuccess ? (
          <>
            <Text>
              Please verify your equipment. Tap on each item to mark it.
            </Text>
            <ToDoList items={toDoItems} onListItemPress={handleListItemPress} />
            <Button
              disabled={!isToDoCompleted}
              onPress={() => setIsSuccess(true)}
              full
            >
              <Text>Finish</Text>
            </Button>
          </>
        ) : (
          <Text>Congratulation! You have concluded the security checklist</Text>
        )}
      </Content>
    </Container>
  )
}

export default Home
