import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'documentNumber' })
export class DocumentNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value?.trim()) return null;
    const cpf = value.replace(/[^\d]/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}