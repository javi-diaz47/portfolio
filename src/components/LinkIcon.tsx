interface Icon {
  className: string
}

export const LinkIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="38px"
      height="38px"
      viewBox="0 0 16 16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5">
      <path d="m5.25 4.25h6.5v6.5m-7.5 1 7.5-7.5" />
    </svg>
  )
}
