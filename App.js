import {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [lightTheme, setTheme] = useState(false);
  const [result, setResult] = useState('Result');

  const colors = {
    dark: '#202020',
    dark1: '#28282B',
    dark2: '#A0A0A0',
    dark3: '#343434',
    light: '#FFFAFA',
    light1: '#F0FFFF',
    light2: '#FFFFF0',
  };

  var val;

  const calculate=()=>{
    if(val=='C'){
      setResult('2')
    }
  }

  const Btn=({title})=>{
    <TouchableOpacity
    style={{
      padding: 10,
      borderRadius: 6,
      margin: 13,
      elevation: 2,
      height: 60,
      width: 60,
      backgroundColor: lightTheme ? colors.dark1 : colors.light2,
    }}>
    <Text
      style={{
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: lightTheme ? colors.light2 : colors.dark,
      }}>
      {title=''}
    </Text>
  </TouchableOpacity>

  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: lightTheme ? colors.light2 : colors.dark,
        alignItems: 'center',
      }}>
      <Switch
        value={lightTheme}
        onValueChange={() => setTheme(!lightTheme)}
        thumbColor={lightTheme ? colors.dark : colors.light2}
        trackColor={{true: colors.dark, false: colors.light2}}
      />
      <Text
        style={{
          fontSize: 40,
          color: lightTheme ? colors.dark : colors.light2,
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop: 190,
          paddingBottom: 20,
        }}>
        {result}
      </Text>
      {/* Button part */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: lightTheme ? colors.dark3 : colors.light2,
          width: '100%',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}>
           <TouchableOpacity
    style={{
      padding: 10,
      borderRadius: 6,
      margin: 13,
      elevation: 2,
      height: 60,
      width: 60,
      backgroundColor: lightTheme ? colors.dark1 : colors.light2,
    }}>
    <Text
      style={{
        fontSize: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: lightTheme ? colors.light2 : colors.dark,
      }}>
      {val='C'}
    </Text>
  </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            {val='DE'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            /
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            %
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            x
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            00
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 6,
            margin: 13,
            elevation: 2,
            height: 60,
            width: 60,
            backgroundColor: lightTheme ? colors.dark1 : colors.light2,
          }}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: lightTheme ? colors.light2 : colors.dark,
            }}>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default App;
