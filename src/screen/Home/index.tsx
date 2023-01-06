import { Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { colors } from "../../global/colors";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function Home() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<boolean[]>([]);
  const [todoDescription, setTodoDescription] = useState('');
  const [createdCount, setCreatedCout] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);

  function handleAddNewTodo() {
    setTodoList([...todoList, todoDescription]);
    setSelectedList([...selectedList, false]);
    setCreatedCout(createdCount + 1);

    setTodoDescription('');
  }

  function handleDeleteTodo(index: number) {
    setTodoList(todoList.filter((_, i) => i !== index));
    setSelectedList(selectedList.filter((_, i) => i !== index));
    setCreatedCout(createdCount - 1);
  }

  function handleFinishTodo(index: number) {
    selectedList[index] = !selectedList[index];
    selectedList[index] ? setFinishedCount(finishedCount + 1) : setFinishedCount(finishedCount - 1);
    setSelectedList(selectedList);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray_300}
          value={todoDescription}
          onChangeText={setTodoDescription}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddNewTodo}>
          <Image source={require('../../../assets/icons/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.counterConatiner}>
        <View style={styles.subContainer}>
          <Text style={[styles.counterText, styles.created]}>
            Criadas
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{createdCount}</Text>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={[styles.counterText, styles.finished]}>
            Concluídas
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{finishedCount}</Text>
          </View>
        </View>
      </View>

      <View style={styles.todoContainer}>
        {todoList.length === 0 && (<View style={styles.vr}></View>)}

        <FlatList
          data={todoList}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <BouncyCheckbox
                size={17.45}
                fillColor={selectedList[index] ? colors.purple_dark : colors.blue_dark}
                onPress={() => handleFinishTodo(index)}
                isChecked={selectedList[index]}
              />

              {selectedList[index] ?
                <Text style={[
                  styles.cardText, { textDecorationLine: 'line-through', color: colors.gray_300 }
                ]}>
                  {item}
                </Text> :
                <Text style={styles.cardText}>{item}</Text>
              }


              <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
                <Image source={require('../../../assets/icons/trash.png')} />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image source={require('../../../assets/icons/Clipboard.png')} />

              <Text style={[styles.emptyListText, { fontWeight: 'bold' }]}>
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}