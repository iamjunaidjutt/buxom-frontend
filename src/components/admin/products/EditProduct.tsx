import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
	BadgesProps,
	CategoriesProps,
	ImagesProps,
	ProductsProps,
	ShadesProps,
	TagsProps,
} from "@/lib/types";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams } from "react-router-dom";

const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name should be at least 2 characters",
		})
		.max(50),
	category: z.string({
		required_error: "Please select a category to display.",
	}),
	description: z
		.string()
		.min(7, {
			message: "Description should be at least 7 characters",
		})
		.max(2000),
	price: z.number().min(1, {
		message: "Price should be at least 1",
	}),
	stock: z.number().min(1, {
		message: "Stock should be at least 1",
	}),
	tags: z.array(z.string()).refine((tag) => tag.length > 0, {
		message: "Please select at least one tag",
	}),
	badges: z.array(z.string()).refine((badge) => badge.length > 0, {
		message: "Please select at least one badge",
	}),
	shades: z.array(z.string()).refine((shade) => shade.length > 0, {
		message: "Please select at least one shade",
	}),
	images: z.array(z.string()).refine((image) => image.length > 0, {
		message: "Please select at least one image",
	}),
});

const EditProduct = () => {
	const params = useParams();
	const productId = params.id;
	const navigate = useNavigate();

	const [product, setProduct] = useState<ProductsProps>(null);
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const [tags, setTags] = useState<TagsProps[]>([]);
	const [badges, setBadges] = useState<BadgesProps[]>([]);
	const [shades, setShades] = useState<ShadesProps[]>([]);
	const [images, setImages] = useState<ImagesProps[]>([]);

	const fetchCategories = async () => {
		try {
			const response = await fetch("http://localhost:8080/categories");
			const data = await response.json();
			setCategories(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch categories");
		}
	};

	const fetchTags = async () => {
		try {
			const response = await fetch("http://localhost:8080/tags");
			const data = await response.json();
			setTags(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch tags");
		}
	};

	const fetchBadges = async () => {
		try {
			const response = await fetch("http://localhost:8080/badges");
			const data = await response.json();
			setBadges(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch badges");
		}
	};

	const fetchShades = async () => {
		try {
			const response = await fetch("http://localhost:8080/shades");
			const data = await response.json();
			setShades(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch shades");
		}
	};

	const fetchImages = async () => {
		try {
			const response = await fetch("http://localhost:8080/images");
			const data = await response.json();
			setImages(data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch images");
		}
	};

	const fetchProduct = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/products/${productId}`
			);
			const data = await response.json();
			console.log(data);
			setProduct({
				...data,
				tags: data.Tags.map((tag: TagsProps) => tag.id),
				badges: data.Badges.map((badge: BadgesProps) => badge.id),
				shades: data.shades.map((shade: ShadesProps) => shade.id),
				images: data.Image.map((image: ImagesProps) => image.id),
			});
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch product");
		}
	};

	useEffect(() => {
		fetchCategories();
		fetchTags();
		fetchBadges();
		fetchShades();
		fetchImages();
		fetchProduct();
	}, []);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: product?.name,
			category: product?.category.id,
			description: product?.description,
			price: product?.price,
			stock: product?.stock,
			tags: product?.tags.map((tag) => tag.id),
			badges: product?.badges.map((badge) => badge.id),
			shades: product?.shades.map((shade) => shade.id),
			images: product?.images.map((image) => image.id),
		},
	});

	useEffect(() => {
		if (product) {
			form.setValue("name", product.name);
			form.setValue("category", product.category.id);
			form.setValue("description", product.description);
			form.setValue("price", product.price);
			form.setValue("stock", product.stock);
			form.setValue("tags", product.tags);
			form.setValue("badges", product.badges);
			form.setValue("shades", product.shades);
			form.setValue("images", product.images);
		}
	}, [form, product]);

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		// then create the category
		try {
			const response = await fetch(
				"http://localhost:8080/products/update/" + productId,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData);
				toast.success("Product updated successfully");
				form.reset();
				navigate("/admin/products");
			}
		} catch (error) {
			console.error(error);
			toast.error("Failed to update product");
			return;
		}
	};

	return (
		<div className="p-5 flex flex-col gap-4 items-start w-full">
			<h1 className="text-4xl font-nunitoSans font-bold">Edit Product</h1>
			<div className="w-5/12">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
						encType="multipart/form-data"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Name"
											{...field}
											className="text-black"
											value={product?.name}
											onChange={(e) =>
												setProduct({
													...product,
													name: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => {
												form.setValue(
													"category",
													value
												);
											}}
											defaultValue={field.value}
										>
											<SelectTrigger
												className="text-black"
												{...field}
											>
												<SelectValue placeholder="Category" />
											</SelectTrigger>
											<SelectContent>
												{categories.map((category) => (
													<SelectItem
														key={category.id}
														value={category.id}
													>
														{category.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormDescription>
										Select the category for the product.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Description"
											{...field}
											className="text-black"
											value={product?.description}
											onChange={(e) =>
												setProduct({
													...product,
													description: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display description.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											placeholder="Price"
											{...field}
											type="number"
											className="text-black"
											value={product?.price}
											onChange={(e) =>
												setProduct({
													...product,
													price: Number(
														e.target.value
													),
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display price.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="stock"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Stock</FormLabel>
									<FormControl>
										<Input
											placeholder="Stock"
											{...field}
											type="number"
											className="text-black"
											value={product?.stock}
											onChange={(e) =>
												setProduct({
													...product,
													stock: Number(
														e.target.value
													),
												})
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display stock.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tags"
							render={() => (
								<FormItem>
									<div>
										<FormLabel>Tags</FormLabel>
										<FormControl></FormControl>
										<FormDescription>
											Select the tags for the product.
										</FormDescription>
									</div>
									{tags.map((tag) => (
										<FormField
											key={tag.id}
											control={form.control}
											name={`tags`}
											render={({ field }) => (
												<FormItem
													key={tag.id}
													className="flex flex-row items-start space-x-3 space-y-0"
												>
													<FormControl>
														<Checkbox
															{...field}
															className=" border-white "
															checked={field.value?.includes(
																tag.id
															)}
															onCheckedChange={(
																checked
															) => {
																return checked
																	? field.onChange(
																			[
																				...field.value,
																				tag.id,
																			]
																	  )
																	: field.onChange(
																			field.value?.filter(
																				(
																					t
																				) =>
																					t !==
																					tag.id
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel>
														{tag.name}
													</FormLabel>
												</FormItem>
											)}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="badges"
							render={() => (
								<FormItem>
									<div>
										<FormLabel>Badges</FormLabel>
										<FormControl></FormControl>
										<FormDescription>
											Select the badges for the product.
										</FormDescription>
									</div>
									{badges.map((badge) => (
										<FormField
											key={badge.id}
											control={form.control}
											name={`badges`}
											render={({ field }) => (
												<FormItem
													key={badge.id}
													className="flex flex-row items-start space-x-3 space-y-0"
												>
													<FormControl>
														<Checkbox
															{...field}
															className=" border-white "
															checked={field.value?.includes(
																badge.id
															)}
															onCheckedChange={(
																checked
															) => {
																return checked
																	? field.onChange(
																			[
																				...field.value,
																				badge.id,
																			]
																	  )
																	: field.onChange(
																			field.value?.filter(
																				(
																					t
																				) =>
																					t !==
																					badge.id
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel>
														{badge.name}
													</FormLabel>
												</FormItem>
											)}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="shades"
							render={() => (
								<FormItem>
									<div>
										<FormLabel>Shades</FormLabel>
										<FormControl></FormControl>
										<FormDescription>
											Select the shades for the product.
										</FormDescription>
									</div>
									{shades.map((shade) => (
										<FormField
											key={shade.id}
											control={form.control}
											name={`shades`}
											render={({ field }) => (
												<FormItem
													key={shade.id}
													className="flex flex-row items-start space-x-3 space-y-0"
												>
													<FormControl>
														<Checkbox
															{...field}
															className=" border-white "
															checked={field.value?.includes(
																shade.id
															)}
															onCheckedChange={(
																checked
															) => {
																return checked
																	? field.onChange(
																			[
																				...field.value,
																				shade.id,
																			]
																	  )
																	: field.onChange(
																			field.value?.filter(
																				(
																					t
																				) =>
																					t !==
																					shade.id
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel>
														{shade.name}
													</FormLabel>
												</FormItem>
											)}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="images"
							render={() => (
								<FormItem>
									<div>
										<FormLabel>Images</FormLabel>
										<FormControl></FormControl>
										<FormDescription>
											Select the images for the product.
										</FormDescription>
									</div>
									{images.map((image) => (
										<FormField
											key={image.id}
											control={form.control}
											name={`images`}
											render={({ field }) => (
												<FormItem
													key={image.id}
													className="flex flex-row items-start space-x-3 space-y-0"
												>
													<FormControl>
														<Checkbox
															{...field}
															className=" border-white "
															checked={field.value?.includes(
																image.id
															)}
															onCheckedChange={(
																checked
															) => {
																return checked
																	? field.onChange(
																			[
																				...field.value,
																				image.id,
																			]
																	  )
																	: field.onChange(
																			field.value?.filter(
																				(
																					t
																				) =>
																					t !==
																					image.id
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel>
														<img
															src={`http://localhost:8080${image.imageURLs}`}
															alt=""
															className="w-auto h-28 object-cover"
														/>
													</FormLabel>
												</FormItem>
											)}
										/>
									))}
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							variant={"outline"}
							className="text-black"
							onClick={() => {
								form.setValue(
									"price",
									Number(form.getValues("price"))
								);
								form.setValue(
									"stock",
									Number(form.getValues("stock"))
								);
							}}
						>
							Edit Product
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditProduct;
