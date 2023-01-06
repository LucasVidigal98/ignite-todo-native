import { Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { colors } from "../../global/colors";
import { useState } from "react";

export function Home() {
  const [todoList, setTodoList] = useState<string[]>(['Integer urna interdum massa'])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray_300}
        />

        <TouchableOpacity style={styles.addButton}>
          <Image source={require('../../../assets/icons/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.counterConatiner}>
        <View style={styles.subContainer}>
          <Text style={[styles.counterText, styles.created]}>
            Criadas
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>0</Text>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={[styles.counterText, styles.finished]}>
            Concluídas
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>0</Text>
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
              {/* <TouchableOpacity style={styles.radioDisabled}>
                <Text>a</Text>
              </TouchableOpacity> */}

              <Text style={styles.cardText}>{item}</Text>

              <Image source={require('../../../assets/icons/trash.png')} />
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