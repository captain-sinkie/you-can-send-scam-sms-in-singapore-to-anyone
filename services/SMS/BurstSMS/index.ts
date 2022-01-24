import axios from 'axios'

type burstSMSApiUrlProps = {
  message: string
  to: string
  from: string
}

type burstSMSCreds = {
  apiUserName: string
  apiSecretKey: string
}

type sendSMSFromBurstProps = burstSMSCreds & burstSMSApiUrlProps

const burstSMSApiUrl = ({ message, to, from }: burstSMSApiUrlProps) => {
  return `https://api.transmitsms.com/send-sms.json?message=${encodeURIComponent(
    message,
  )}&to=${to}&from=${from}`
}

export const sendSMSFromBurst = async ({
  apiUserName,
  apiSecretKey,
  message,
  to,
  from,
}: sendSMSFromBurstProps) => {
  const endpoint = burstSMSApiUrl({ message, to, from })
  const headers = { Accept: 'application/json' }
  const auth = { username: apiUserName, password: apiSecretKey }

  return await axios.get(endpoint, { headers, auth })
}
