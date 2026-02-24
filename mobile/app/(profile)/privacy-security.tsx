import SafeScreen from '@/components/SafeScreen';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

function PrivacyAndSecurityScreen() {
  return (
    <SafeScreen>
        {/* HEADER */}
      <View className="px-6 pb-5 border-b border-surface flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text className="text-text-primary text-2xl font-bold">Privacy & Security</Text>
      </View>
    </SafeScreen>
  )
}

export default PrivacyAndSecurityScreen