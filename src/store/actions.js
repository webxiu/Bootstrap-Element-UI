// actions 用来操作mutations
export const setIsAuthed = ({commit},data) =>{
    commit('setIsAuthed',data)
}

export const setUser = ({commit},data) =>{
    commit('setUser',data)
}