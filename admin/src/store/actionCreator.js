export default {
    changeModel(params){
        let action={
            type:'CHANGE_MODEL',
            params:params
        }
        return action
    }
}