import { Decimal } from '@prisma/client/runtime/library';

interface ProductProps {
  id: string
  name: string
  code: string
  description: string
  price: Decimal
} 

export class Product {

  private props: ProductProps;

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }
  get code() {
    return this.props.code;
  }
  get price() {
    return this.props.price;
  }
  get description() {
    return this.props.description;
  }

  set name(value: string) {
    this.props.name = value;
  }

  set code(value: string) {
    this.props.code = value;
  }

  set description(value: string) {
    this.props.description = value;
  }

  set price(value: Decimal) {
    this.props.price = value;
  }
  
  constructor(props: ProductProps) {
    this.props = props;
  }
}