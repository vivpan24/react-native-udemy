import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text,TouchableOpacity,View} from 'react-native';

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  };
const Quiz = ({navigation}) => {
    const[questions,setQuestions]=useState();
    const[ques,setQues]=useState(0);
    const [options, setOptions]= useState([])
    const [score, setScore]= useState(0)
    const getQuiz = async ()=>{
        const url ='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res= await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
        console.log(data);
    };
    useEffect(() => {
        getQuiz();
      }, []);

    const handleNextPress=()=>{
        setQues(ques+1);
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
      };

    const generateOptionsAndShuffle=(_question)=>{
        const options= [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
      };
      const handleSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if(ques!==9){
            setQues(ques+1)
            setOptions(generateOptionsAndShuffle(questions[ques+1]))
          }
        }
        const handleShowResult=()=>{
            navigation.navigate('Result',{
                score: score
              });
        }
  return (
      <View>
      {questions&&(
      <View style={styles.container}>
      <View style={styles.questions}>
          <Text style={styles.questionsText}>Q.{decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.options}>
          <TouchableOpacity style={styles.optionsButton} onPress={()=>handleSelectedOption(options[0])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[0])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionsButton} onPress={()=>handleSelectedOption(options[1])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[1])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionsButton} onPress={()=>handleSelectedOption(options[2])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[2])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionsButton} onPress={()=>handleSelectedOption(options[3])}>
          <Text style={styles.optionsText}>{decodeURIComponent(options[3])}</Text>
          </TouchableOpacity>
       </View>

       <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>

        {ques !==9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>}

        {ques ===9 &&<TouchableOpacity style={styles.button}  onPress={handleShowResult}>
          <Text style={styles.buttonText}>Show Result</Text>
          </TouchableOpacity>}

      </View>
    </View>
    )}
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
    container:{
       paddingTop:40,
       paddingHorizontal:20,
       height:'100%',
    },
    questions:{
        marginVertical:16
    },
    options:{
        marginVertical:16,
        flex:1
    },
    bottomButtons:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#4dc1db',
        padding:12,
        borderRadius:16,
        alignItems:'center'
      },
      buttonText:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
      },
      questionsText:{
          fontSize:28,
      },
      optionsButton:{
          fontSize:18,
          fontWeight:'600',
          color:'white',
      },
      optionsText:{
          padding:12,
          marginVertical:6,
          backgroundColor:'#4dc1db',
          borderRadius:12,
      }

})