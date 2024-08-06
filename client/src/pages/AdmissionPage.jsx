import Banner from '../components/banner/Banner'
import TuitionTable from '../components/table/Table'
import { useData } from '../context/BannerContext'

const fee_data = [
  {
    program: 'Preschool',
    ageGroup: '3-5',
    annualTuition: '$5000',
    registrationFee: '$100',
    activityFee: '$200',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
  {
    program: 'Kindergarten',
    ageGroup: '5-6',
    annualTuition: '$6000',
    registrationFee: '$150',
    activityFee: '$250',
  },
]

const fee_headers = [
  { header: 'Program', accessor: 'program' },
  { header: 'Age Group', accessor: 'ageGroup' },
  { header: 'Annual Tuition', accessor: 'annualTuition' },
  { header: 'Registration Fee', accessor: 'registrationFee' },
  { header: 'Activity Fee', accessor: 'activityFee' },
]

const activity_data = [
  {
    activity: 'before and after core',
    fee: '$120/per month',
  },
  {
    activity: 'language',
    fee: '$130/per month',
  },
  {
    activity: 'sports',
    fee: '$120/per month',
  },
]

const activity_headers = [
  { header: 'Additional Service', accessor: 'activity' },
  { header: 'fee', accessor: 'fee' },
]

const AdmissionPage = () => {
  const { admissionPage } = useData()

  return (
    <div className="min-h-screen w-full">
      <Banner
        main={admissionPage.title}
        content={admissionPage.content}
        buttonText={admissionPage.buttonText}
      />
      <div className="p-10 mb-10">
        <TuitionTable columns={fee_headers} data={fee_data} isAdmin={true} />
      </div>
      <div className="p-10 mb-10">
        <TuitionTable
          columns={activity_headers}
          data={activity_data}
          isAdmin={true}
        />
      </div>
    </div>
  )
}

export default AdmissionPage
