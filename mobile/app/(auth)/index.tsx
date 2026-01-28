import useSocialAuth from '@/hooks/useSocialAuth';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

const AuthScreen = () => {
  const {loadingStrategy, handleSocialAuth} = useSocialAuth();


  return (
    <View  className='flex-1 justify-center items-center bg-white px-8'>
      <Image source={require("../../assets/images/auth-image.png")} className='size-96' resizeMode="contain" />

      <View className='gap-2 mt-3'>
        <TouchableOpacity className='px-6 py-2 flex-row items-center justify-center bg-white border border-gray-300 rounded-full' onPress={() =>handleSocialAuth('oauth_google')} disabled={loadingStrategy !== null} 
        style={{
           shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2, // this is for android
        }} >
          {loadingStrategy === "oauth_google" ? (
            <ActivityIndicator size={'small'} color={'#4285f4'} />
          ) : (
            <View className='flex-row items-center justify-center'>
              <Image source={require("../../assets/images/google.png")} className='size-10 mr-3' resizeMode='contain' />
              <Text className='text-black text-base font-medium'>Continue with Google</Text>
            </View>
          )}
        </TouchableOpacity>
          
        <TouchableOpacity className='px-6 py-3 flex-row items-center justify-center bg-white border border-gray-300 rounded-full' onPress={() =>handleSocialAuth('oauth_apple')} disabled={loadingStrategy !== null} 
        style={{
           shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2, // this is for android
        }} >
          {loadingStrategy === "oauth_apple" ? (
            <ActivityIndicator size={'small'} color={'#4285f4'} />
          ) : (
            <View className='flex-row items-center justify-center'>
              <Image source={require("../../assets/images/apple.png")} className='size-8 mr-3' resizeMode='contain' />
              <Text className='text-black text-base font-medium'>Continue with Apple</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View>
        <Text className='mt-6 px-2 leading-4 text-center text-gray-500 text-xs'>By Signing up, you agree to our <Text className='text-blue-500'>Terms, Selling your soul, Privacy Policy </Text>and <Text className='text-blue-500'>Cookie Use</Text></Text>
      </View>
    </View>
  )
}

export default AuthScreen