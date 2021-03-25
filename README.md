# VAT status validator

It's a small js script automatically validating current VAT status (via official goverment API in a real time) for a specific Polish company. It allows to generate a proper badge.

## Usage

Please add and configure script (replace example NIP number with your company's NIP number)

```
<script src="https://cdn.jsdelivr.net/gh/xpu-pl/vat-status-validator/js/vat-status-validator.js"></script>
<script>
  new VATStatusValidator("7792488801").addBadge(); // please replace 7792488801 with your company NIP number
</script>
```

Badge will be generated wherever you add element with id `vat-status-badge` for example:

```
<span id="vat-status-badge"></span>
```

## Demo

We have added this badge to our company page: [xpu.pl](https://xpu.pl) 
