import React from "react";
import { Form, Input, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function ExperienceProjects() {
    return (
        <div>
            <h5><b>Experience</b></h5>
            <hr />
            <Form.List name="experience">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-3">
                                        <Form.Item {...restField} name={[name, "company"]}
                                            rules={[{ required: true, message: "Company is required" }]}>
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-2">
                                        <Form.Item {...restField} name={[name, "years"]}
                                            rules={[{ required: true, message: "Years are required" }]}>
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-3">
                                        <Form.Item {...restField} name={[name, "place"]}
                                            rules={[{ required: true, message: "Place is required" }]}>
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-2">
                                        <Form.Item {...restField} name={[name, "range"]}
                                            rules={[{ required: true, message: "Year Range is required" }]}>
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-12">
                                        <Form.Item {...restField} name={[name, "description"]}
                                            rules={[{ required: true, message: "Description is required" }]}>
                                            <TextArea placeholder="Describe your role and work" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-2">
                                        <MinusCircleOutlined style={{ marginLeft: '15px', fontSize: 25, color: "tomato" }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" style={{ marginTop: '10px' }} onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>

            <h5><b>Projects</b></h5>
            <hr />
            <Form.List name="projects">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key} className="col-md-12">
                                    <div className="row">
                                        {/* Project Title */}
                                        <div className="col-md-4">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "title"]}
                                                rules={[{ required: true, message: "Project title is required" }]}
                                            >
                                                <Input placeholder="Project Title" />
                                            </Form.Item>
                                        </div>

                                        {/* Project Image URL */}
                                        <div className="col-md-4">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "image"]}
                                                rules={[{ required: false }]}
                                            >
                                                <Input placeholder="Project Image URL" />
                                            </Form.Item>
                                        </div>

                                        {/* Project Category Dropdown */}
                                        <div className="col-md-4">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "category"]}
                                                rules={[{ required: true, message: "Category is required" }]}
                                            >
                                                <Select placeholder="Select Category">
                                                    <Select.Option value="Web App">Web App</Select.Option>
                                                    <Select.Option value="Data Analysis and Visualization">
                                                        Data Analysis and Visualization
                                                    </Select.Option>
                                                    <Select.Option value="Others">Others</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </div>

                                        {/* Project Description */}
                                        <div className="col-md-12">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "description"]}
                                                rules={[{ required: true, message: "Description is required" }]}
                                            >
                                                <TextArea placeholder="Project Description" />
                                            </Form.Item>
                                        </div>

                                        {/* GitHub Repository Link */}
                                        <div className="col-md-4">
                                            <Form.Item {...restField} name={[name, "github"]} rules={[{ required: false }]}>
                                                <Input placeholder="GitHub Repository Link" />
                                            </Form.Item>
                                        </div>

                                        {/* Live Project Link */}
                                        <div className="col-md-4">
                                            <Form.Item {...restField} name={[name, "live"]} rules={[{ required: false }]}>
                                                <Input placeholder="Live Project Link (if available)" />
                                            </Form.Item>
                                        </div>

                                        {/* Year Range */}
                                        <div className="col-md-2">
                                            <Form.Item
                                                {...restField}
                                                name={[name, "range"]}
                                                rules={[{ required: true, message: "Year Range is required" }]}
                                            >
                                                <Input placeholder="Year Range (e.g., 2023-2024)" />
                                            </Form.Item>
                                        </div>

                                        {/* Remove Button */}
                                        <div className="col-md-2">
                                            <MinusCircleOutlined
                                                style={{ marginLeft: "12px", fontSize: 25, color: "tomato" }}
                                                onClick={() => remove(name)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Form.Item>
                            <Button
                                type="dashed"
                                style={{ marginTop: "10px" }}
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    );
}

export default ExperienceProjects;
