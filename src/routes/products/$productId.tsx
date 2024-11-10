import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /products/$productId!'
}