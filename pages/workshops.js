import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetRoleButtons,
  Markdown,
  // WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetVerticalTimeline,
  TwoColsLayout as Section,
  MyTypography,
  WidgetSchedule
} from 'eventjuicer-site-components';


// import {
//   NoteAdd, 
//   Settings,
//   Public,
//   Mic,
//   Assessment,
//   FaSearch,
//   FaPoll,
//   FaTrophy
// } from '../components/icons'


import settings from '../settings';


const PageSpeaking = () => (

  <div>
    
       <Wrapper first label="workshops.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '5rem'}}>

          <MyTypography template="h4" label="workshops.hello.submit" />
           
          <Markdown label="workshops.hello.details" />

          </div> }
        right={ 
             
          <Markdown label="workshops.form.closed" />

        }

        // leftCentered={true}

      />


      </Wrapper>

      <WidgetSchedule setting="workshops.schedule" />

{/*

    
 <WidgetRegForm
            wrapperProps={{label: null}}
            setting="workshops.registration"
            />
            
*/}


{/* 
      <WidgetIconGrid setting="workshops.benefits" icons={{
            FaSearch: FaSearch, 
            FaPoll: FaPoll, 
            FaTrophy: FaTrophy
        }} /> */}


      <WidgetFaq setting="workshops.faq" />




  <WidgetPhotostream setting="workshops.photostream" />

   






        {/* <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        /> */}



        <WidgetVideoWithEventInfo
          setting="heroExpo"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />


  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {},
    revalidate: 1
  }

})

export default connect()(PageSpeaking);
