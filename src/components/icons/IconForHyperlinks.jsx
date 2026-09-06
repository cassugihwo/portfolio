import download from '../../assets/icons/download.svg'
import file from '../../assets/icons/file.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import mail from '../../assets/icons/mail.svg'

const ICONS = { mail, download, linkedin, file }

export default function IconForHyperlinks({ variant = 'mail', className = 'size-[60px]' }) {
  return <img src={ICONS[variant]} alt="" className={className} />
}