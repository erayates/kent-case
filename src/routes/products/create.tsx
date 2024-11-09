import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /products/create!'
}
