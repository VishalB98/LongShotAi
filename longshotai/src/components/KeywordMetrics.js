import React from 'react'
import { connect } from 'react-redux'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


function KeywordMetrics(props) {
    const { keywordMetric, intentMap, keywordDifficulty } = props;
    console.log(keywordMetric, keywordDifficulty)
    return (
        <div className='flex justify-center'>
            <div className='flex justify-around sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] '>
                <div className=' flex flex-col justify-around w-[45%] rounded-md p-2 h-[40vh] bg-slate-50'>
                    <div className='flex flex-col justify-around items-start p-2'>
                        <p>Volume</p>
                        <p>{keywordMetric ? keywordMetric[1] : "Loading"}</p>
                    </div>
                    <hr />
                    <div className='flex flex-col justify-around items-start p-2'>
                        <p className='py-2'>Keyword Difficulty</p>
                        <div className='flex justify-around items-start align-middle py-2'>
                            <div className='flex flex-col items-start'>
                                <p>{keywordMetric ? keywordMetric[7] : "Loading"}%</p>
                                <p>{keywordDifficulty ? keywordDifficulty.rating : "Loading"}</p>
                            </div>
                            <div className='h-[30px] w-[30px] flex justify-center self-center ml-2'>
                                <CircularProgressbar value={66} strokeWidth={25} styles={
                                    buildStyles({
                                        pathColor: keywordDifficulty ? keywordDifficulty.color : "white"
                                     })
                                } />
                            </div>
                        </div>
                        <div className='text-left py-2'>
                            <p>{keywordDifficulty ? keywordDifficulty.text : "Loading"}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-[45%] h-[40vh]'>
                    <div className='flex flex-col justify-around items-start p-2 bg-slate-50 rounded-md h-[30%]'>
                        <p>Intent</p>
                        <div>
                            {
                                intentMap ? <div style={{
                                    backgroundColor: intentMap.color.bg,
                                    padding: '0.5rem',
                                    borderRadius: '2rem'
                                }}
                                    title={intentMap['hover-text']}
                                >
                                    <p>{intentMap.type}</p></div> : <div><p>Loading</p></div>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col justify-around items-start p-2 bg-slate-50 rounded-md h-[30%]'>
                        <p>Results</p>
                        {keywordMetric ? <p className='text-2xl'>{keywordMetric[5] / 1000000 + "M"}</p> : <p>Loading</p>}
                    </div>
                    <div className='flex justify-start p-2 bg-slate-50 rounded-md h-[30%]'>
                        <div className='flex flex-col justify-around items-start w-[50%]'>
                            <p>CPC</p>
                            {keywordMetric ? <p className='text-2xl'>{"$" + keywordMetric[4]}</p> : <p>Loading</p>}
                        </div>
                        <div className='flex flex-col justify-around items-start w-[50%]'>
                            <p>Comp.</p>
                            {keywordMetric ? <p className='text-2xl'>{keywordMetric[3]}</p> : <p>Loading</p>}
                        </div>
                    </div>
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
        keywordMetric: state.keywordMetric,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordMetrics)

