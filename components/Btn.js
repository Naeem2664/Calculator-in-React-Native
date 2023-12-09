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
      {title}
    </Text>
  </TouchableOpacity>
};