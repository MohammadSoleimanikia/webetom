import { Button, Typography } from '@mui/material'

import { HiOutlinePhone } from 'react-icons/hi'
type Props={
  link:string
}
export default function CouncilButtonMobile({link}:Props) {
  return (
    <Button
        LinkComponent={"a"}
        href={link}
        variant="contained"
        disableElevation
        className="relative mt-3 w-full overflow-hidden rounded-2xl px-20 lg:hidden"
      >
        {/* left icon */}
        <div className="absolute left-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
          <HiOutlinePhone className="h-7 w-7 text-white" />
        </div>

        {/* center text */}
        <div className="flex flex-col items-center leading-none">
          <Typography variant="h3" className="text-lg font-bold text-white">
            مشاوره رایگان
          </Typography>

          <Typography variant="caption" className="mt-1 text-sm text-white">
            در کمتر از ۱ دقیقه
          </Typography>
        </div>

        {/* right icon */}
        <HiOutlinePhone className="text-primary-light absolute right-8 h-7 w-7" />
      </Button>
  )
}
