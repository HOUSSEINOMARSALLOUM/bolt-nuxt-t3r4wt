export const useNavigation = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'AI Ethics', path: '/ai-ethics' },
    { name: 'Co Founders', path: '/co-founders' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Events', path: '/events' },
    { name: 'Articles', path: '/articles' }
  ]

  return {
    navigation
  }
}