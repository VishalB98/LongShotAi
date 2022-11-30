import React from 'react'
import { connect } from 'react-redux'

function KeywordHeader(props) {
    const { apiJsonData } = props;
    return (
        <div className='flex flex-col justify-around items-start align-middle p-4'>
            <div className='flex pb-4'>
                <p>Keyword Explorer</p>{'>'}<p>Keyword Overview</p>
            </div>
            <div className='flex flex-col pb-4 '>
                <div className='flex' >
                    <p>Keyword:</p><p>{apiJsonData ?  apiJsonData.topic : "Loading"}</p>
                </div>
                <div className='flex'>
                    <p>Database:</p><p>{apiJsonData ? apiJsonData.country : "Loading"}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        apiJsonData: state.apiJsonData,
        keywordResult: state.keywordResult,
        intentMap: state.intentMap,
        keywordDifficulty: state.keywordDifficulty,
        searchFilter: state.searchFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordHeader)
