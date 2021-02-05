import { connect } from "react-redux";

function TasksContainer() {
    return {
    }
}

function mapStateToProps(state){
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(TasksContainer);