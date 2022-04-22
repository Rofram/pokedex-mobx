import { makeAutoObservable } from 'mobx'

const AppStore = () => makeAutoObservable({
  searchQuery: '',
  scrollPositionY: 0,
  handleSearchQueryChange(query: string) {
    this.searchQuery = query;
  },
  handleScrollPositionYChange(y: number) {
    this.scrollPositionY = y;
  }
})

export default AppStore;