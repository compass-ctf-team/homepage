export default function Home() {
  return (
    <pre className='flex h-full flex-col items-center justify-center space-y-2.5 whitespace-pre-wrap md:space-y-5'>
      <code className='text-[2dvw] leading-[0.9] tracking-[-0.1em] lg:text-[2.0dvh] select-none'>{ascii}</code>
      <code className='text-center text-sm md:text-base'>
        <p>Hack For Fun Not For Profit</p>
      </code>
    </pre>
  )
}

const ascii = `   _____  ____   __  __  _____           _____  _____     _____  _______  ______ 
  / ____|/ __ \\ |  \\/  ||  __ \\  /\\     / ____|/ ____|   / ____||__   __||  ____|
 | |    | |  | || \\  / || |__) |/  \\   | (___ | (___    | |        | |   | |__   
 | |    | |  | || |\\/| ||  ___// /\\ \\   \\___ \\ \\___ \\   | |        | |   |  __|  
 | |____| |__| || |  | || |   / ____ \\  ____) |____) |  | |____    | |   | |     
  \\_____|\\____/ |_|  |_||_|  /_/    \\_\\|_____/|_____/    \\_____|   |_|   |_|     
`

